import { JournalEntry } from "../models/entryModel";
import { EntryRepository } from "../repository/entryRepository";


export class EntryService {
    private entryRepository: EntryRepository;

    constructor() {
        this.entryRepository = new EntryRepository();
    }

    async getJournalEntryByEntryId(entry_id: number): Promise<JournalEntry | undefined> {
        return await this.entryRepository.getJournalEntryById(entry_id);
    }

    async getJournalEntriesByUserId(user_id: number): Promise<JournalEntry[] | undefined> {
        return await this.entryRepository.getJournalEntriesByUserId(user_id);
    }

}