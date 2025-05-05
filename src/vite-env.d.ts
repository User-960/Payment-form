/// <reference types="vite/client" />

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module '*.svg' {
	import * as React from 'react'
	export const ReactComponent: React.FunctionComponent<
		ReactSvgProps<SVGSVGElement> & {
			title?: string
		}
	>

	const src: string
	export default src
}
