import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Pecresse = new Candidate(
    CandidateID.PECRESSE,
    "Valérie Pécresse",
    "Les Républicains",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS_ABROGER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "Mettre fin aux 35 heures")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.YES, "")],
    ]),
);
