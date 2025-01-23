
import {JournalEntry} from "../models/entryModel";
import { withDatabase } from "../utils/dbUtils";

//create a constructor for the EntryRepository class

export class EntryRepository {

    async getJournalEntryById(entry_id: number): Promise<JournalEntry | undefined> {
       return withDatabase(async (db) => {
            const sql = 'SELECT * FROM journal_entries WHERE id = ?';            
            const result = await db.get(sql, [entry_id]);
            return result as JournalEntry || undefined;
        });
    }

    async getJournalEntriesByUserId(user_id: number): Promise<JournalEntry[] | undefined> {
       return withDatabase(async (db) => {
            const sql = 'SELECT * FROM journal_entries WHERE user_id = ?';
            const result = await db.all(sql, [user_id]);
            return result as JournalEntry[];
        });
    }


}