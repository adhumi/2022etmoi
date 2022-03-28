import "./Landing.scss";

import { ArrowRightOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button, CandidateScore, Icon, PropositionButton } from "../../components";
import { RandomScoreMock } from "../../tests/mocks";
import { CandidateID, presentableUserAnswer, UserAnswer } from "../../types";

/**
 * A route to display the app landing page.
 */
export function Landing() {
    const randomCandidateCards = useMemo(() => {
        const list = Array.from(Object.keys(CandidateID)) as CandidateID[];
        const cards = [];
        for (let count = 0; count < 3; count ++) {
            const index = Math.floor(Math.random() * list.length);
            const [candidateID] = list.slice(index, index + 1);
            cards.push(<CandidateScore key={count} candidateID={candidateID} score={RandomScoreMock()}/>);
        }
        return cards;
    }, []);

    return (
        <div className="route-landing">
            <section>
                <Icon file="logo"/>
                <p className="route-landing__line">Testez votre proximité avec les principaux candidats à la
                    présidentielle sur une trentaine de propositions.</p>
                <div className="route-landing__start">
                    <Link to="/app">
                        <Button>Commencer le quiz <ArrowRightOutlined/></Button>
                    </Link>
                </div>
            </section>
            <section className="section-argument" id="operation">
                <h2>Sécurité, transparence</h2>
                <div className="section-argument__wrapper">
                    <div className="section-argument__item">
                        <div className="section-argument__item-image">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.5 45C28.4672 45 34.1906 42.6295 38.41 38.41C42.6297 34.1905 45 28.4678 45 22.5C45 16.5322 42.6295 10.8094 38.41 6.59004C34.1905 2.37035 28.4678 0 22.5 0C16.5322 0 10.8094 2.37053 6.59004 6.59004C2.37035 10.8095 0 16.5322 0 22.5C0 26.4496 1.03957 30.3293 3.01436 33.75C4.98914 37.1704 7.82959 40.0107 11.2497 41.9854C14.6701 43.9601 18.5499 44.9997 22.4997 44.9997L22.5 45ZM25.3125 5.86406C28.8751 6.46418 32.151 8.19182 34.6582 10.7926C37.1656 13.3934 38.7721 16.7305 39.2416 20.3123C39.7108 23.8945 39.0182 27.5328 37.2656 30.6916L25.3125 21.1502V5.86406ZM23.14 26.6133L33.7501 35.0859C31.326 37.2555 28.3252 38.676 25.1105 39.1749C21.8958 39.6741 18.6054 39.2307 15.6376 37.8984L23.14 26.6133ZM19.6875 5.86406V19.6875H5.86406C6.45346 16.2357 8.09976 13.0518 10.5758 10.5756C13.0521 8.09953 16.2359 6.45322 19.6877 5.86383L19.6875 5.86406ZM17.2476 25.3125L10.9195 34.7766C8.24959 32.2559 6.47461 28.9332 5.86395 25.3125H17.2476Z"
                                    fill="#4C739B"/>
                            </svg>
                        </div>
                        <p>Les résultats sont sauvegardés sur votre navigateur. Notre serveur ne collecte aucune
                            donnée ni statistique.</p>
                    </div>
                    <div className="section-argument__item">
                        <div className="section-argument__item-image">
                            <svg width="45" height="43" viewBox="0 0 45 43" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.420086 33.9201C0.41784 35.9546 1.16442 37.9186 2.51792 39.4376C3.87142 40.9566 5.73661 41.9242 7.75785 42.1558C9.77909 42.3871 11.815 41.8665 13.4766 40.6929C15.1385 39.5191 16.3101 37.7748 16.7678 35.7924C17.2256 33.8102 16.9374 31.7287 15.9586 29.9452C14.9795 28.1616 13.3783 26.8011 11.4601 26.1228V16.8768C13.9355 16.0015 15.849 14.0043 16.6176 11.4938C17.386 8.98315 16.9181 6.25708 15.3568 4.14591C13.7956 2.03526 11.3256 0.790039 8.70005 0.790039C6.07453 0.790039 3.60456 2.03526 2.04326 4.14591C0.482013 6.25679 0.0141344 8.98286 0.782509 11.4938C1.55111 14.0043 3.4646 16.0015 5.93998 16.8768V26.1228C4.32705 26.6931 2.93066 27.7487 1.94217 29.1449C0.953686 30.5411 0.421983 32.2093 0.419971 33.9199L0.420086 33.9201ZM8.7001 36.6801C7.96813 36.6801 7.26617 36.3892 6.74849 35.8717C6.23099 35.354 5.9401 34.652 5.9401 33.9201C5.9401 33.1881 6.23097 32.4861 6.74849 31.9685C7.26622 31.451 7.96813 31.1601 8.7001 31.1601C9.43208 31.1601 10.134 31.4509 10.6517 31.9685C11.1692 32.4862 11.4601 33.1881 11.4601 33.9201C11.4601 34.652 11.1692 35.354 10.6517 35.8717C10.134 36.3892 9.43208 36.6801 8.7001 36.6801ZM8.7001 6.3201C9.43208 6.3201 10.134 6.61097 10.6517 7.12849C11.1692 7.64621 11.4601 8.34812 11.4601 9.08009C11.4601 9.81207 11.1692 10.514 10.6517 11.0317C10.134 11.5492 9.43208 11.8401 8.7001 11.8401C7.96813 11.8401 7.26617 11.5492 6.74849 11.0317C6.23099 10.514 5.9401 9.81207 5.9401 9.08009C5.9401 8.34812 6.23097 7.64616 6.74849 7.12849C7.26622 6.61099 7.96813 6.3201 8.7001 6.3201Z"
                                    fill="#4C739B"/>
                                <path
                                    d="M41.8202 2.18005H24.5701C23.5841 2.18005 22.6729 2.70609 22.1799 3.56005C21.6868 4.41404 21.6868 5.46606 22.1799 6.32005C22.6729 7.17404 23.5841 7.70005 24.5701 7.70005H41.8202C42.8062 7.70005 43.7175 7.17402 44.2105 6.32005C44.7035 5.46606 44.7035 4.41404 44.2105 3.56005C43.7175 2.70606 42.8062 2.18005 41.8202 2.18005Z"
                                    fill="#4C739B"/>
                                <path
                                    d="M41.8202 13.2201H24.5701C23.5841 13.2201 22.6729 13.7461 22.1799 14.6001C21.6868 15.4541 21.6868 16.5061 22.1799 17.3601C22.6729 18.2141 23.5841 18.7401 24.5701 18.7401H41.8202C42.8062 18.7401 43.7175 18.2141 44.2105 17.3601C44.7035 16.5061 44.7035 15.4541 44.2105 14.6001C43.7175 13.7461 42.8062 13.2201 41.8202 13.2201Z"
                                    fill="#4C739B"/>
                                <path
                                    d="M41.8202 24.2603H24.5701C23.5841 24.2603 22.6729 24.7863 22.1799 25.6402C21.6868 26.4942 21.6868 27.5462 22.1799 28.4001C22.6729 29.2541 23.5841 29.7801 24.5701 29.7801H41.8202C42.8062 29.7801 43.7175 29.2541 44.2105 28.4001C44.7035 27.5462 44.7035 26.4942 44.2105 25.6402C43.7175 24.7862 42.8062 24.2603 41.8202 24.2603Z"
                                    fill="#4C739B"/>
                                <path
                                    d="M41.8202 35.3H24.5701C23.5841 35.3 22.6729 35.8261 22.1799 36.6801C21.6868 37.5341 21.6868 38.5861 22.1799 39.4402C22.6729 40.2942 23.5841 40.8202 24.5701 40.8202H41.8202C42.8062 40.8202 43.7175 40.2942 44.2105 39.4402C44.7035 38.5861 44.7035 37.5341 44.2105 36.6801C43.7175 35.8261 42.8062 35.3 41.8202 35.3Z"
                                    fill="#4C739B"/>
                            </svg>
                        </div>
                        <p>Le site est open-source. <br/> Vous pouvez consulter le code source et contribuer <a
                            href="https://www.github.com/2022etmoi/2022etmoi">sur GitHub</a>.</p>
                    </div>
                </div>
            </section>
            <section className="section-vote">
                <div>
                    <h2>Comment répondre ?</h2>
                    <div className="section-vote__container">
                        <div className="section-vote__container__item">
                            <div className="section-vote__buttons">
                                <PropositionButton userAnswer={UserAnswer.MUST}></PropositionButton>
                                <PropositionButton userAnswer={UserAnswer.MUST_NOT}></PropositionButton>
                            </div>
                            <p>Si la proposition vous semble importante, choisissez
                                <b>&nbsp;{presentableUserAnswer(UserAnswer.MUST)}&nbsp;</b>
                                ou<b>&nbsp;{presentableUserAnswer(UserAnswer.MUST_NOT)}&nbsp;</b>
                                afin qu&apos;elle compte deux fois plus lors du calcul des scores.</p>
                        </div>
                        <div className="section-vote__container__item">
                            <div className="section-vote__buttons">
                                <PropositionButton userAnswer={UserAnswer.YES}></PropositionButton>
                                <PropositionButton userAnswer={UserAnswer.NO}></PropositionButton>
                            </div>
                            <p>Pour les autres propositions, sélectionnez
                                <b>&nbsp;{presentableUserAnswer(UserAnswer.YES)}</b>,
                                <b>&nbsp;{presentableUserAnswer(UserAnswer.NO)}</b>,
                                ou passez.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="route-landing__quiz">
                <h2>Ce quiz ne remplace pas la lecture des programmes des candidats !</h2>
                <p>Il permet d&apos;avoir une idée des accords et désaccords importants avec les différents
                    programmes. <br/>
                    Le score affiché pour chaque candidat à la fin du test a une valeur indicative et
                    dépend forcément du choix des propositions.</p>
                <Link to="/app">
                    <Button>Commencer le quiz <ArrowRightOutlined/></Button>
                </Link>
            </section>
        </div>
    );
}
