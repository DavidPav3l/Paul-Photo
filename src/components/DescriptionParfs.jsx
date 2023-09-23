import { useState } from 'react'
import { Transition } from '@headlessui/react'
import MoreText from './MoreText'

export default function ReadMore() {
	const [readMore, setReadMore] = useState(false)
	const udateReadMore = () => {
		setReadMore(!readMore)
	}
	return (
		<div className="relative z-10 m-8 w-[80%] max-w-2xl leading-loose 2xl:text-lg">
			{!readMore ? (
				<div className="xl:indent-8">
					Imaginile cu natura în diversele ei manifestări, precum și cele cu oamenii și locurile
					lor, m-au atras din copilărie când răsfoiam diverse atlasuri și când urmăream la TVR
					celebra
					<span className="italic">Teleenciclopedia</span>, iar apoi pasiunea pentru fotografie a
					început într-o școală...{' '}
					<button onClick={udateReadMore} type="button" className="font-bold">
						citeste mai mult
					</button>
				</div>
			) : (
				<MoreText onUpdateReadMore={udateReadMore} />
			)}
		</div>
	)
}
