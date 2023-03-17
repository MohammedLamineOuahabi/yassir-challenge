const app = require('../app');
const request = require('supertest');
const axios = require('axios');

jest.mock('axios');

describe('GET /api/v1/pollution', () => {
  it('returns the pollution level for the nearest city to the given latitude and longitude', async () => {
    const latitude = 48.8566;
    const longitude = 2.3522;
    const mockData = {
      status: 'success',
      data: {
        city: 'Paris',
        state: 'Ile-de-France',
        country: 'France',
        location: {
          type: 'Point',
          coordinates: [2.351666, 48.859425]
        },
        current: {
          pollution: {
            ts: '2023-03-17T19:00:00.000Z',
            aqius: 54,
            mainus: 'p2',
            aqicn: 29,
            maincn: 'p1'
          },
          weather: {
            ts: '2023-03-17T19:00:00.000Z',
            tp: 13,
            pr: 1008,
            hu: 87,
            ws: 4.63,
            wd: 260,
            ic: '10n'
          }
        }
      }
    };
    const expectedResponse = {
      Result: {
        Pollution: {
          ts: '2023-03-17T19:00:00.000Z',
          aqius: 54,
          mainus: 'p2',
          aqicn: 29,
          maincn: 'p1'
        }
      }
    };
    axios.get.mockResolvedValueOnce({ data: mockData });
    const response = await request(app).get(`/api/v1/pollution?latitude=${latitude}&longitude=${longitude}`);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
