// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section scss
import looking from '../../../styles/sections/index/looking.module.scss';
import section from '../../../styles/blocks/section.title.module.scss';

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 *
 * @returns {jsx} <Looking />
 */
export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
        <h4>I&apos;m currently looking for employment.</h4>
        <h2 className={looking.json}>Senior : &#123;</h2>
        <h2 className={looking.jsonSub}>
          <span className={looking.highlight}>Fullstack Engineer</span>,
        </h2>
        <h2 className={looking.json}>&#125;</h2>
        <h4>
          I am particularily interested in product facing postions where I can help make an
          organization wide impact.
        </h4>
      </Container>
    </Section>
  );
}
