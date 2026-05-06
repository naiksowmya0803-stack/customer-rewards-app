import { calculateRewardPoints } from "../services/rewardService";

describe("Reward Calculation Test Cases", () => {
  test("should return 0 reward points for amount below 50", () => {
    expect(calculateRewardPoints(40)).toBe(0);
  });

  test("should calculate reward points correctly between 50 and 100", () => {
    expect(calculateRewardPoints(80)).toBe(30);
  });

  test("should calculate reward points correctly above 100", () => {
    expect(calculateRewardPoints(120)).toBe(90);
  });

  test("should handle exact 100 value", () => {
    expect(calculateRewardPoints(100)).toBe(50);
  });

  test("should handle fractional amount", () => {
    expect(calculateRewardPoints(130.5)).toBe(111);
  });

  test("should handle negative values", () => {
    expect(calculateRewardPoints(-20)).toBe(0);
  });
});