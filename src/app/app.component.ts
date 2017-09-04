import {Component, Input} from '@angular/core';
import {ExternalBar} from './my-model';
import {Http} from '@angular/http';

interface Bar {
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @Input() dummy: string; // coverage work's
    @Input() foo: Bar; // coverage work's
    @Input() test: ExternalBar; // coverage not working
    @Input() testWorks: { externalBar: ExternalBar }; // // coverage work's

    title = 'app';

    constructor(private http: Http /*coverage not Works*/) {

    }
}
