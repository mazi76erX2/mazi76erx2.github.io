// Core packages
// import Image from 'next/image'
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
// import SectionGridBg from '../../blocks/section.grid.block'
// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

// Copy
import content from '../../../content/index/about.json';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle={content.about.subTitle}
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/my-team.png" alt="Lucas Team photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title={content.section1.title}
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy={content.section1.copy}
						/>
						<BadgesBlock 
							title={content.section2.title}
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy={content.section2.copy}
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods = content.methods