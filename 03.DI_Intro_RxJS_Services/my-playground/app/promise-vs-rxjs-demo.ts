import { interval, map } from "rxjs";

// Promise
const p = new Promise((resolve, reject) => {
    console.log('promise invoked');
    // we use setTimeout() to simulate asynchronous operation, to have resolve in some time
  
    setTimeout(() => {
      resolve(111);
    }, 3000);
  });
  
  p.then((data) => {
    console.log('from promise', data);
  });
  // Promise.resolve(112).then(data => data * 10).then( x => console.log('from promise 2', x));
  
  // sync analogy
  [1].map((x) => x * 2);
  
  // Observables
  // sync analogy
  [1, 2, 3, 4].map((x) => x * 2);
  
  // async example
  // const o = new Observable((observer) => {
  //   observer.next(200);
  //   observer.next(201);
  //   observer.next(202);
  
  // })
  
  // o.subscribe((data) => {
  //   console.log('from observable', data);
  
  // })
  
  // const interval = (intervalValue: number) => {
  //   const o = new Observable<number>((observer) => {
  //   let counter = 0;
  
  //   const timer = setInterval(() => {
  //     observer.next(counter++)
  //   }, intervalValue);
  
  //   return () => {
  //     // clear data on destroy
  //    clearInterval(timer)
  //   }
  //   });
  
  //   return o;
  // }
  
  const stream$ = interval(2000)
    .pipe(map((x) => x * 2))
    .pipe(map((x) => x * 10));
  
    // stream$.subscribe(data => console.log('data from observable', data))
    stream$.subscribe({
      next: (data) => console.log(data),
      error: (error)=>console.error('err: ', error),
      complete: () => console.log('The stream has completed')
      
    })