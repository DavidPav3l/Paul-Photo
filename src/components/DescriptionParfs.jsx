import { useState } from 'react'
import { Transition } from '@headlessui/react'
import MoreText from './MoreText'

export default function ReadMore() {
	const [readMore, setReadMore] = useState(false)
	const udateReadMore = () => {
		setReadMore(!readMore)
	}
	return (
		<div className="relative mx-5 mt-5 w-[80%] max-w-2xl leading-loose 2xl:text-lg">
			<Transition
				show={readMore}
				enter="transition-opacity duration-1000"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-1000"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<MoreText onUpdateReadMore={udateReadMore} />
			</Transition>
			<Transition
				show={!readMore}
				enter="transition-opacity duration-1000"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-1000"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<p className="xl:indent-8">
					Imaginile cu natura în diversele ei manifestări, precum și cele cu oamenii și locurile
					lor, m-au atras din copilărie când răsfoiam diverse atlasuri și când urmăream la TVR
					celebra
					<span className="italic">Teleenciclopedia</span>, iar apoi pasiunea pentru fotografie a
					început într-o școală...{' '}
					<button onClick={udateReadMore} type="button" className="font-bold">
						citeste mai mult
					</button>
				</p>
			</Transition>
			{/* {readMore ? (
					
			) : (
				
			)} */}
		</div>
	)
}
