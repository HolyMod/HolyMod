import {Modals} from "@Holy";

export default class TypescriptExample {
    onStart(): void {
        Modals.alert("Alert!", <>
            <h1>Important Alert</h1>
            <p>Very important alert.</p>
        </>);
    }

    onStop(): void {}
}