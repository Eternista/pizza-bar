import { SinglePizza } from "./post/SinglePizza";
import { PizzaApi } from "../Api/PizzaApi";

export const PizzaCatalog = () => {

    return (
        <div className="row">
            {PizzaApi.map(Pizza => (
                <div key={Pizza.id} className="col-12 col-md-6">
                    <SinglePizza id={Pizza.id} name={Pizza.name} desc={Pizza.desc} type={Pizza.type} image={Pizza.image}/>
                </div>
            ))}
        </div>
    )
}
