// import { useState } from "react";
import Output from "../components/Output";
import Button from "../components/Button";
import '../pages/Calculator.css';
import { useState } from "react";

const CalculatorPage = () => {
    var [msg, printz] = useState('');
    const clicked = (text) => {
        if (text === "=") {
            try{
                printz(eval(msg).toString());
                setTimeout(()=>{
                    printz('');
                },2000);
            }
            catch{
                printz('ERROR');
            }
        }
        else if (text === "AC") {
            printz('');
        }
        else if (text === "<=") {
            printz(msg.substring(0, msg.length - 1));
        }
        else {
            printz(msg + text);
        }
    }
    return (
    <div className="container border border-9">
        <Output classname="alert alert-danger" value={msg} />
        <div className="card">
            <div className="row text-center">
                <div className="col-3">
                    <Button fn={clicked} classname="btn btn-secondary" text="(" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="7" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="4" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="1" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="0" /><br />
                </div>
                <div className="col-3">
                    <Button fn={clicked} classname="btn btn-secondary" text=")" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="8" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="5" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="2" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="." /><br />
                </div>
                <div className="col-3">
                    <Button fn={clicked} classname="btn btn-secondary" text="%" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="9" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="6" /><br />
                    <Button fn={clicked} classname="btn btn-outline-success" text="3" /><br />
                    <Button fn={clicked} classname="btn btn-primary" text="=" /><br />
                </div>
                <div className="col-3">
                    <Button fn={clicked} classname="btn btn-warning" text="<=" />
                    <Button fn={clicked} classname="btn btn-secondary" text="/" /><br />
                    <Button fn={clicked} classname="btn btn-secondary" text="*" /><br />
                    <Button fn={clicked} classname="btn btn-secondary" text="-" /><br />
                    <Button fn={clicked} classname="btn btn-secondary" text="+" /><br />
                </div>
                <div>
                    <Button fn={clicked} classname="btn btn-danger" text="AC" /><br />
                </div>
            </div>
        </div>
    </div>
    );
};

export default CalculatorPage;