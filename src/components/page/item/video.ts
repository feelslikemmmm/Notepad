import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframe.src = url;
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const splited = url.split('=');
    const videoId = splited[splited.length - 1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}
