import { useState } from "react";


export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);

    return display ?
        (<div>
            <p>This is true</p>
        </div>)
        :
        (<div>
            <p>This is false</p>
        </div>);
    // if (display) {
    //     output = <h3>This is conditional component</h3>;
    // } else {
    //     output = <h3>Nothing to see Here</h3>;
    // }


}
