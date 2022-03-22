import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Hidalgo = new Candidate(
    CandidateID.HIDALGO,
    "Anne Hidalgo",
    "Parti Socialiste",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "Augmenter le SMIC de 15%")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS_ABROGER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NEUTRAL, "Proposition 5 : Sans modifier la durée légale, je veux inciter les entreprises qui le souhaitent à avancer vers la réduction du temps de travail.")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.YES, "\"J'organiserai une conférence de consensus, car nous devons construire un consensus sur ce sujet crucial. […] Si elle aboutissait, comme en Allemagne, l'État reprendrait le contrôle de la production et de la qualité de ce produit, ainsi que le contrôle de sa mise sur le marché.\" p. 26")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.YES, "\"La TVA sur la facture de gaz naturel et d'électricité sera baissée pour les particuliers, et, transitoirement, comme mesure de pouvoir d'achat, la baisse sera également appliquée pour les carburants en cas de flambée du prix à la pompe.\" p. 14")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.NO, "")],
    ]),
);
