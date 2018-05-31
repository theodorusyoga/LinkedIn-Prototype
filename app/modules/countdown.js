import moment from 'moment'

export const SET_START_TIME = '/countdown/SET_START_TIME'
export const SET_END_TIME = '/countdown/SET_END_TIME'
export const SET_COUNTDOWN = '/countdown/SET_COUNTDOWN'
export const CLEAR_COUNTDOWN = '/countdown/CLEAR_COUNTDOWN'
export const SET_INTERVAL = '/countdown/SET_INTERVAL'
export const CLEAR_INTERVAL = '/countdown/CLEAR_INTERVAL'
export const SET_START_TIME_ERROR = '/countdown/SET_START_TIME_ERROR'
export const SET_END_TIME_ERROR = '/countdown/SET_END_TIME_ERROR'
export const SET_MESSAGE_ERROR = '/countdown/SET_MESSAGE_ERROR'
export const CLEAR_TIME_ERROR = '/countdown/CLEAR_TIME_ERROR'
export const CLEAR_MESSAGE_ERROR = '/countdown/CLEAR_MESSAGE_ERROR'

const initialState = {
    startTime: '',
    endTime: '',
    startTimeErrorMsg: '',
    endTimeErrorMsg: '',
    errorMsg: '',
    countdown: -1,
    interval: {}
}

export const setStartTime = (startTime) => ({
    type: SET_START_TIME,
    startTime
})

export const setEndTime = (endTime) => ({
    type: SET_END_TIME,
    endTime
})

export const clearMessageError = () => ({
    type: CLEAR_MESSAGE_ERROR
})

export const forceStopCountdown = (e) => {
    return (dispatch, getState) => {
        e.preventDefault()
        const { interval } = getState().countdown
        clearInterval(interval)
        dispatch({
            type: CLEAR_INTERVAL
        })
        dispatch({
            type: CLEAR_COUNTDOWN
        })
    }
}

const startCountdown = (countdown, dispatch, getState) => {
    const timer = setInterval(() => {
        countdown--
        if (countdown < 0) {
           clearInterval(timer)
        } //clear if already run out
        dispatch({
            type: SET_COUNTDOWN,
            countdown: countdown
        })
    }, 1000) //decrease every second
    dispatch({
        type: SET_INTERVAL,
        interval: timer
    })
}

const validateTime = (startTime, endTime) => {
    var startTimeError
    var endTimeError
    if (startTime == '') {
        startTimeError = 'Required field!'
    }
    if (endTime == '') {
        endTimeError = 'Required field!'
    }

    const start = parseTime(startTime)
    const end = parseTime(endTime)
    if (startTimeError == null && !start.valid) {
        startTimeError = 'Start time format is not valid'
    }
    if (endTimeError == null && !end.valid) {
        endTimeError = 'End time format is not valid'
    }

    if (startTimeError == null && endTimeError == null &&
        end.time.diff(start.time, 'seconds') < 0) {
        startTimeError = 'Start time cannot be after end time'
        endTimeError = 'End time cannot be before start time'
    }

    return {
        start: start.time,
        end: end.time,
        startTimeError, endTimeError
    }
}

const parseTime = (time) => {
    const parsed = moment(time, 'HH:mm:ss', true)
    return {
        valid: parsed.isValid(),
        time: parsed
    }
}

export const setAndStartCountdown = (e) => {
    return (dispatch, getState) => {
        e.preventDefault()

        const { startTime, endTime } = getState().countdown

        //clear errors
        dispatch({
            type: CLEAR_TIME_ERROR
        })

        //validation
        const { start, end, startTimeError, endTimeError } = validateTime(startTime, endTime)
        dispatch({
            type: SET_START_TIME_ERROR,
            startTimeErrorMsg: startTimeError
        })
        dispatch({
            type: SET_END_TIME_ERROR,
            endTimeErrorMsg: endTimeError
        })
        if (startTimeError != null || endTimeError != null) {
            dispatch({
                type: SET_MESSAGE_ERROR,
                errorMsg: 'Please check your input and try again'
            })
            return
        }

        //calculate difference between two dates
        const diff = end.diff(start, 'seconds')
        dispatch({
            type: SET_COUNTDOWN,
            countdown: diff
        })
        startCountdown(diff, dispatch)
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_START_TIME:
            return {
                ...state,
                startTime: action.startTime
            }
        case SET_END_TIME:
            return {
                ...state,
                endTime: action.endTime
            }
        case SET_COUNTDOWN:
            return {
                ...state,
                countdown: action.countdown
            }
        case CLEAR_COUNTDOWN:
            return {
                ...state,
                countdown: -1
            }
        case SET_INTERVAL:
            return {
                ...state,
                interval: action.interval
            }
        case CLEAR_INTERVAL:
            return {
                ...state,
                interval: {}
            }
        case SET_START_TIME_ERROR:
            return {
                ...state,
                startTimeErrorMsg: action.startTimeErrorMsg
            }
        case SET_END_TIME_ERROR:
            return {
                ...state,
                endTimeErrorMsg: action.endTimeErrorMsg
            }
        case SET_MESSAGE_ERROR:
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        case CLEAR_TIME_ERROR:
            return {
                ...state,
                startTimeErrorMsg: '',
                endTimeErrorMsg: '',
            }
        case CLEAR_MESSAGE_ERROR:
            return {
                ...state,
                errorMsg: ''
            }
        default: return state
    }
}

