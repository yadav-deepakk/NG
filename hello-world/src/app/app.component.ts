import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterModule],
    template: `
        <main>
            <header class="brand-name">
                <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
            </header>
            <section class="content">
                <router-outlet></router-outlet>
            </section>
        </main>
    `,
    styleUrls: ["./app.component.css"],
})
export class AppComponent {}
