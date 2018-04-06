import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    constructor(private http: HttpClient) { }

    async handleSwitch(action: String, gpio: Number) {
        console.log(action, gpio);
        //return await this.http.get(`http://192.168.1.97/lights${action}?gpio=${gpio}`)
        return await this.http.get(`http://192.168.43.242/lights${action}?gpio=${gpio}`)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );;
    }

    async switchAll(action: String) {
        console.log(action);
        const gpios = [0, 2, 13];
        //await this.http.get(`http://192.168.1.97/lights${action}?gpio=${gpio}`)
        return await gpios.map(async (gpio) => {
            await this.http.get(`http://192.168.43.242/lights${action}?gpio=${gpio}`)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
        });
    }
    ngOnInit() { }
}
