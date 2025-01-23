import { Router } from "express";
import { getJournalEntryById, getJournalEntriesByUserId } from "../controllers/entryController";

const router = Router();

router.get("/:user_id", getJournalEntriesByUserId); // GET /journal-entries/:user_id
router.post("/:entry_id", getJournalEntryById); // POST /journal-entries

export default router;