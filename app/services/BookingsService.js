const BookingsRepository = require('../repositories/BookingsRepository');

class BookingsService {
    static async getAll() {
        try {
            return await BookingsRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await BookingsRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(Booking) {
        try {
            return await BookingsRepository.create(Booking);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, Booking) {
        try {
            return await BookingsRepository.update(id, Booking);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await BookingsRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BookingsService;