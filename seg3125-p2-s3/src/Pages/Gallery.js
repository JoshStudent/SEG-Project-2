import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
//import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';

export default function Gallery() {
    return (
        <>
            <div className="main">
                <h1>Gallery</h1>
            </div>

            <div className="App">
                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <a
                        data-lg-size="1200-1788"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img1.jpg')}
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
                    >
                        <img
                            alt="layers of blue."
                            width="200"
                            className="img-responsive"
                            src={require('./assets/img1.jpg')}
                        />
                    </a>
                    <a
                        data-lg-size="1600-2400"
                        href="/"
                        data-pinterest-text="Pin it2"
                        data-tweet-text="lightGallery slide  2"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="layers of blue."
                            src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                        />
                    </a>
                    <a
                        data-lg-size="1600-2400"
                        href="/"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
                    >
                        <img
                            className="img-responsive"
                            alt="layers of blue."
                            src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                        />
                    </a>
                    <a
                        data-lg-size="1600-2398"
                        href="/"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="layers of blue."
                            src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                        />
                    </a>
                    <a
                        data-lg-size="1600-1067"
                        href="/"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="layers of blue."
                            src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                        />
                    </a>
                    <a
                        data-lg-size="1600-1067"
                        href="/"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
                    >
                        <img
                            className="img-responsive"
                            alt="layers of blue."
                            src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
                        />
                    </a>
                </LightGallery>
            </div>
        </>
    );
}