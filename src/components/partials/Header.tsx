import { LineSeparator } from "../extras/LineSeparator";

export const Header = () => {
  return <header className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="logo text-white"><span>Pizza Bravo</span></h1>
        <LineSeparator lineColor='white'/>
      </div>
    </div>
  </header>;
};
