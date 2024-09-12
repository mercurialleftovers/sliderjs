const { log }   =  console
const select    = (selection) => document.querySelector(selection)
const selectAll = (selection) => document.querySelectorAll(selection)


// get img width

const IMG_WIDTH = select('img').width
const IMG_COUNT = selectAll("img").length

log(`img width: ${IMG_WIDTH}`)
log(`img count: ${IMG_COUNT}`)

class Slider {
    static IMG_WIDTH = select('img').width
    static IMG_COUNT = selectAll("img").length
    static CURRENT_IMG = 1;

    static LEFT_BUTTON  = select('.move_left')
    static RIGHT_BUTTON = select('.move_right')

    static SLIDER       = select('.slider')


    static setup() {
        Slider.RIGHT_BUTTON.addEventListener('click', e => {
            if (Slider.CURRENT_IMG < Slider.IMG_COUNT) {
                Slider.CURRENT_IMG ++
            } else {
                // go far left
                Slider.CURRENT_IMG = 1
            }

            Slider.SLIDER.style['left'] = -1 * (Slider.CURRENT_IMG - 1) * IMG_WIDTH + "px"

            log(`state:\ncount :${Slider.IMG_COUNT}\ncursor: ${Slider.CURRENT_IMG}`)
        })
    
        Slider.LEFT_BUTTON.addEventListener('click', e => {
            if (Slider.CURRENT_IMG > 1) {
                Slider.CURRENT_IMG --
            } else {
                // go far right
                Slider.CURRENT_IMG = Slider.IMG_COUNT
            }

            Slider.SLIDER.style['left'] = -1 * (Slider.CURRENT_IMG - 1) * IMG_WIDTH + "px"

            log(`state:\ncount :${Slider.IMG_COUNT}\ncursor: ${Slider.CURRENT_IMG}`)
        })

        // DEBUG
        select('.spotlight').style['width'] = Slider.IMG_WIDTH + 'px'
    }

}

Slider.setup()