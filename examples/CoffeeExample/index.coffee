import {Modals} from "@Holy"

export default class CoffeeScript
    onStart: -> 
        Modals.alert "Important Alert", <>
            <h1>Important Alert</h1>
            <p>Very important alert.</p>
        </>
    onStop: -> 
        console.log "Stop."