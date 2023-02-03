import Router from '../Router/Router';

class App {
  public static start(): void {
    new Router().start();

    document.addEventListener('click', (event) => {
      new Router().route(event);
    });
  }
}

export default App;
