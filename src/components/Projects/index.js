import { BiSearchAlt } from "react-icons/bi";

import "./index.scss";

const Projects = () => {
  return (
    <section>
      <div className={"project_lists"}>
        <div className={"search"}>
          <input
            className={"search__bar"}
            placeholder={"Search Project"}
            type="text"
            name="name"
          />
          <BiSearchAlt className={"search__icon"} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
