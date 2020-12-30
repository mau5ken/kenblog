import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Hero from '../components/Hero'

export default function Home({ allPostsData }) {
	return (
		<>
			<Hero></Hero>
			
			<section className="container mx-auto px-6 p-10">
				<div className="flex items-center flex-wrap mb-20">
					<div className="w-full md:w-1/2">
						<h1 className="md:text-9xl text-gray-800 mb-3 trns_text_blk">BACK<br/>END</h1>
					</div>
					<div className="w-full md:w-1/2">
						<p>
							lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
							lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
							lorem ipsumlorem ipsumlorem ipsumlorem ipsum
						</p>
					</div>
				</div>
				
				<div className="flex items-center flex-wrap mb-20 bg-black">
					<div className="w-full md:w-1/2">
						<p className="text-white">
							lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
							lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
							lorem ipsumlorem ipsumlorem ipsumlorem ipsum
						</p>
					</div>
					<div className="w-full md:w-1/2">
						<h1 className="md:text-9xl text-gray-800 mb-3 trns_text_wht">FRONT<br/>END</h1>
					</div>
				</div>
			</section>

			<div className="bg-gray-100 ">
				<div className="container mx-auto px-6 text-center py-20">
					<h2 className="mb-6 text-4xl font-bold text-center text-black">
						Recientes Blogs
					</h2>

					<section>
						<div className="grid grid-cols-3 gap-4">
							{allPostsData.map(({ id, date, title }) => (
								<div className="...  md:shadow-lg rounded bg-white" key={id}>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	)	
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
	  props: {
		allPostsData
	  }
	}
}
