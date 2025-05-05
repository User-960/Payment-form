export function PaymentForm() {
	return (
		<div className={'p-5 w-full mx-auto'}>
			<section className={'mb-12'}>
				<div className={'text-white mb-0.5'}>Your balance</div>
				<div className={'flex items-center gap-2 mb-3.5'}>
					<div className={'shadow-2xl bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center'}>
						<span className={'italic font-bold text-red-400'}>V</span>
					</div>
					<dvi className={'text-2xl font-bold'}>$2,461.49</dvi>
				</div>
				<button className='bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 font-medium'>
					<span>+</span>
					<span>Buy credits</span>
				</button>
			</section>

			<section>
				<div className={'flex justify-between items-center mb-2.5'}>
					<div className={'font-semibold'}>Payment cards</div>
					<button className={'font-semibold text-blue-500'}>
						<span>+ </span>
						<span>Add card</span>
					</button>
				</div>

				<div className={'flex items-center gap-3'}>
					<img src={'/img/visa.svg'} alt={'visa'} width={60} className={'rounded-xl overflow-hidden shrink-0'} />
					<div className={'flex justify-between items-center w-full'}>
						<div>
							<div className={'flex items-center gap-2 font-medium'}>
								Bill Henderson{' '}
								<div className={'rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]'}>Primary</div>
							</div>
							<div className={'opacity-50 text-xs mt-0.5'}>**** 4117</div>
						</div>
						<button>►</button>
					</div>
				</div>

				<div className={'flex items-center gap-3 mb-4'}>
					<img src={'/img/master.svg'} alt={'master'} width={60} className={'rounded-xl overflow-hidden shrink-0'} />
					<div className={'flex justify-between items-center w-full'}>
						<div>
							<div className={'flex items-center gap-2 font-medium'}>Bill Henderson</div>
							<div className={'opacity-50 text-xs mt-0.5'}>**** 5646</div>
						</div>
						<button>►</button>
					</div>
				</div>

				<div className={'bg-green-200/15 rounded-b-lg py-2 px-3 text-sm'}>
					We are compliant with the payment card industry data security standard.
				</div>
			</section>
		</div>
	)
}
