import {Modals} from "@Holy";

export default class JavacriptExample {
    onStart() {
        Modals.alert("Alert!", <>
            <h1>Important Alert</h1>
            <p>Very important alert.</p>
        </>);
    }

    onStop() {}
}
