export default function Container({children, style}){
    return (
        <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        boxSizing: "border-box",
        ...style,}}>{children}</div>
    )
}