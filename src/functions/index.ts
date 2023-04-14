type ClassNameX = ( ...classes: Array<String> ) => string

export const classNameX:ClassNameX = (...classes) => classes.map(_class => _class.trim()).join(' ')