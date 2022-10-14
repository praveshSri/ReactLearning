function Card(props) {
  return (
    <div
      className={props.className}
      style={{
        display: props.container ? "flex" : "block",
        justifyContent: props.justifyContent || "flex-start",
        flexDirection: props.flexDirection || "row",
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || "auto",
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || "nowrap",
        flex: props.flex || "0 1 auto",
        alignItems: props.alignItems || "stretch",
        margin: props.margin || "0",
        marginTop: props.marginTop || "0",
        marginBottom: props.marginBottom || "0",
        marginLeft: props.marginLeft || "0",
        marginRight: props.marginRight || "0",
        padding: props.padding || "0",
        width: props.width || "auto",
        height: props.height || "auto",
        maxWidth: props.maxWidth || "none",
        backgroundColor: props.backgroundColor || "none",
        color: props.color || "none",
        textAlign: props.textAlign || "none",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
