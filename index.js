class CountdownTimer {
    constructor({ onTick, selector, targetDate }) {
        this.targetDate = new Date('Aug 10, 2021');
        this.time = null;
        this.selector = selector;
        this.targetDate = targetDate;

        this.dateEl = document.querySelector('[data-value="days"]');
        this.hoursEl = document.querySelector('[data-value="hours"]');
        this.minsEl = document.querySelector('[data-value="mins"]');
        this.secsEl = document.querySelector('[data-value="secs"]');

        this.pageLoaded();
    }

    getTimeNow() {
        return this.time = this.targetDate - new Date;
     }

    pageLoaded() {
        if (this.getTimeNow() > 0) {
            this.getTimeComponent(this.time);
            this.calculateTime();
        }
        else {
            this.stopTimer(this.time);
        }
                
    }

    calculateTime() {
            setInterval(() => {
            this.getTimeNow();
            this.getTimeComponent(this.time)
        }, 1000);
    }

    getTimeComponent(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        console.log(`${days}:${hours}:${mins}:${secs}`);
        
        this.updateTimerFace({ days, hours, mins, secs })
    }
    
    updateTimerFace({ days, hours, mins, secs }) {
    this.secsEl.textContent = secs;
    this.minsEl.textContent = mins;
    this.hoursEl.textContent = hours;
    this.dateEl.textContent = days;
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }

    stopTimer() {
        clearInterval(this.time);
        this.getTimeComponent(0);
    };
}

const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 10, 2022'),
});
