import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles.scss';

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2> */}
    <br />
    <footer className="footer">
      <div class="container row">
        <div class="container col-md-4 mb-5 mb-lg-0 taCenter">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                class="btn btn-outline-light btn-social text-center rounded-circle"
                role="button"
                href="#"
              >
                <i class="fa fa-instagram fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="btn btn-outline-light btn-social text-center rounded-circle"
                role="button"
                href="#"
              >
                <i class="fa fa-facebook fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="btn btn-outline-light btn-social text-center rounded-circle"
                role="button"
                href="#"
              >
                <i class="fa fa-twitter fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container taCenter">
          <span>
            © Copyright {new Date().getFullYear()}{' '}
            <a href="/posts/impressum">Impressum</a> Alle Rechte reserviert.
            Erstellt von{' '}
            <a target="_blank" href="https://martinmueller.dev">
              Martin Müller
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
);
