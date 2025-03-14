import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Lassalle = new Candidate(
    CandidateID.LASSALLE,
    "Jean Lassalle",
    "Résistons",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "SMIC à 1 400 euros nets")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "\"Faire respecter la loi SRU qui, pour une meilleure mixité sociale\"")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.NO, "")],
    ]),
);
