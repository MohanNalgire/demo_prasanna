import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};


@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private httpclient: HttpClient
    ) { }


    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    /**
     *      Created by  : |  |  |
     *      Created on  : |  |  |
     *      Modified by : |  |  |
     *      Modified by : |  |  |
     * 
     *      functino use:   
     *      @prams      :
     *      @return     :
     *      Description : This is a service for login page to submit data to back-end server.
     *      
     */
    onSubmit() {
        console.log('this.loginForm', this.loginForm.value);
        this.httpclient.post(
            `http://localhost:3000/users`,
            {
                "username": this.loginForm.value.username,
                "password": this.loginForm.value.password
            },
            httpOptions
        ).subscribe(
            (data) => {
                console.log("service res", data);
            },
            (error) => {
                console.error("Error msg", error);
            },
            () => {
                console.info("Request completed");
            }
        );
    }
}
