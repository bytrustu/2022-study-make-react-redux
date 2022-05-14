export function createDom(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    Object.entries(node.props)
        .forEach(([name, value]) => element.setAttribute(name, value));

    node.children
        .map(createDom)
        .forEach(element.appendChild.bind(element));

    return element;
}

export function createElement(tag = 'div', props, ...children) {
    return { tag, props, children }
}

export function render(vdom, container) {
    container.appendChild(createDom(vdom));
}
