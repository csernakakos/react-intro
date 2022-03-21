import "./Title.css";

export default function Title({version, title}) {
  
    return (
        <div className="title-block">
            <h1 className="title">Docusaurus Doc Center</h1>
            <br />
            <h2 className="subtitle"> {title}: Find software documentation for Docusaurus {version} </h2>
        </div>
    )
}