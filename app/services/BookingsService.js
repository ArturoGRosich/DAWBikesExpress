const BookingsRepository = require('../repositories/BookingsRepository');
const AvailabilityService = require('./AvailabilityService');

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

    static async create(bikeModelId, startDate, endDate) {
        try {
            const availability = await AvailabilityService.findById(bikeModelId, startDate, endDate);
            console.log(availability);
            if (availability) {
                const bikeIdentificationId = availability.bikeIdentifications[0].id;
                return await BookingsRepository.create(bikeIdentificationId, startDate, endDate);
            } else {
                throw new Error("No bikes available");
            }

            
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