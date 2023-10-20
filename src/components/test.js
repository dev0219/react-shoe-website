import * as React from 'react';
import '../style.css';

import Carousel from './carousel';
import Fancybox from './fancy';

const Test = () => {
    return (
        <div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <Carousel>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/60/1600x1200"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/60/200x150"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/61/1600x1200"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/61/200x150"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/62/1600x1200"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/62/200x150"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/63/1600x1200"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/63/200x150"
                  width="400"
                  height="300"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="https://lipsum.app/id/64/1600x1200"
              >
                <img
                  alt=""
                  src="https://lipsum.app/id/64/200x150"
                  width="400"
                  height="300"
                />
              </div>
            </Carousel>
          </Fancybox>
        </div>
      );
}

export default Test;