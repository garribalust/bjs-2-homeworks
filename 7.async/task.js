class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = undefined;
   }

   addClock(time, callback, id) {
      if(id === undefined ) {
         throw new Error('параметр не передан')
      }

      this.timerId = id;

      if(this.alarmCollection.find(elem => elem.id === id) && this.alarmCollection.length > 0 ) {
         return console.error('Будильник с таким id уже существует');
         
      }
      return this.alarmCollection.push({id, time, callback});
   } 

   removeClock(id) {
      let findId = this.alarmCollection.findIndex(elem => elem.id === id);
      if(findId !== -1) {
         this.alarmCollection.splice(findId, 1);
         this.timerId--;
         return true;
      }
      if(findId === -1) {
         return false;
      } 
   }

   getCurrentFormattedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return `${hours}:${minutes}`;
   }

   start() {
      // в процессе работы
      setTimeout(() => {
         let call = this.alarmCollection.find(elem => elem.time === time);
         if(call === getCurrentFormattedTime()) {
               console.log(this.callback);
            }
         }, 2000)

      if(this.timerId === undefined) {
         setInterval(() => {
            this.alarmCollection.forEach(elem => console.log(elem.checkClock()));
            }, 2000);
         }
      }

   stop() {
      // в процессе работы
      if(this.timerId > 0) {
         clearInterval();
         this.timerId = undefined;
      }
   }

   printAlarms() {
      this.alarmCollection.forEach((elem) => console.log(`Будильник ${elem.id} заведен на ${elem.time}`))
   }

   clearAlarms() {
      this.stop();
      this.alarmCollection.splice();
   }

}