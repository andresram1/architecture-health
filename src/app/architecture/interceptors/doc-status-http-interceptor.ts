import {Injectable} from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable()
export class DocStatusHttpInterceptor implements HttpInterceptor {
  // default doc status json-data path
  private _docStatusJsonPath = "assets/json-data/mock-docs.json";

  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequests(req, next);
  }

  /**
   * Handle request's and support with mock data.
   * @param req
   * @param next
   */
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;

    if (url.match(/\/doc-status\/.*/) && method === "GET") {
      const repoId = this.getRepoId(url);

      req = req.clone({
        url: this._docStatusJsonPath,
      });
      return next.handle(req).pipe(delay(500));
    }

    // if there is not any matches return default request.
    return next.handle(req);
  }

  /**
   * Get Employee unique uuid from url.
   * @param url
   */
  getRepoId(url: any) {
    const urlValues = url.split("/");
    return urlValues[urlValues.length - 1];
  }
}

/**
 * Mock backend provider definition for app.module.ts provider.
 */
export let docStatusHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DocStatusHttpInterceptor,
  multi: true,
};
