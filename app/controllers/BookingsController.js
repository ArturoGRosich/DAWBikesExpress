const BookingsService = require('../services/BookingsService');

class BookingsController {
    static async getAll(req, res) {
        try {
            const Bookings = await BookingsService.getAll();
            res.status(200).json(Bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const Bookings = await BookingsService.getById(id);
            res.status(200).json(Bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const Bookings = req.body;
            const createdBookings = await BookingsService.create(Bookings);
            res.status(201).json(createdBookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const Bookings = req.body;
            const updatedBookings = await BookingsService.update(id, Bookings);
            res.status(200).json(updatedBookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await BookingsService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BookingsController;