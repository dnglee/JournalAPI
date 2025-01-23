import { Request, Response, NextFunction } from 'express';
import { EntryService } from '../services/entryService';
import { EntryRepository } from '../repository/entryRepository';

const entryService = new EntryService();
const entryRepository = new EntryRepository();

export const getJournalEntriesByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user_id = parseInt(req.params.user_id);
        const entries = await entryService.getJournalEntriesByUserId(user_id);
        res.status(200).json(entries);
    }
    catch(error){
        next(error);
    }
}

export const getJournalEntryById = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const entry_id = parseInt(req.params.entry_id);
        const entry = await entryService.getJournalEntryByEntryId(entry_id);
        res.status(200).json(entry);
    }
    catch(error){
        next(error);
    }
}
