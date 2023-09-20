import { useState } from 'react'

export default function ReadMore({ children }) {
	const [readMore, setReadMore] = useState(false)
	return (
		<div className="mx-5 mt-5 w-[80%] max-w-2xl leading-loose 2xl:text-lg">
			{readMore ? (
				children
			) : (
				<p className="xl:indent-8">
					Imaginile cu natura în diversele ei manifestări, precum și cele cu oamenii și locurile
					lor, m-au atras din copilărie când răsfoiam diverse atlasuri și când urmăream la TVR
					celebra
					<span className="italic">Teleenciclopedia</span>, iar apoi pasiunea pentru fotografie a
					început într-o școală...{' '}
					<button onClick={() => setReadMore(true)} type="button" className="font-bold">
						citeste mai mult
					</button>
				</p>
			)}
		</div>
	)
}
