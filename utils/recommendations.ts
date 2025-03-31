import { SCORE_THRESHOLDS } from '@/constants/resignation/thresholds';

// 점수 계산 함수
export function calculateScore(answers: Record<string, string>): number {
  /**
   * 사용자의 답변 데이터에서 '예' 응답의 개수를 합산하여 점수를 계산합니다.
   * @param answers - { [질문 ID]: "yes" | "no" }
   * @returns 총점 (0 ~ 20)
   */
  return Object.values(answers).filter((answer) => answer === 'yes').length;
}

// 권장 사항 제공 함수
export function getRecommendation(score: number): string {
  /**
   * 계산된 점수를 기반으로 사용자에게 적합한 권장 메시지를 반환합니다.
   * @param score - 사용자의 총 점수
   * @returns 권장 메시지
   */
  if (score <= SCORE_THRESHOLDS.stable.max) {
    return '당신은 긍정왕! 현재 만족하며 직장생활에 임하고 계시는군요! 앞으로도 지금과 같이 긍정적으로 힘내시기를 바래요. 행운이 늘 당신의 곁에 있을거에요.';
  } else if (score <= SCORE_THRESHOLDS.slightIssue.max) {
    return '직장에서 조금의 개선이 필요한 시기입니다. 차분히 문제를 찾고 변화하며 나아간다면 더 나은 직장생활을 할 수 있을거에요.';
  } else if (score <= SCORE_THRESHOLDS.considerLeaving.max) {
    return '이직을 고려하여 준비할 필요가 있습니다. 퇴사 전에 필요한 준비를 철저히 하시며 준비해두세요.';
  } else {
    return '퇴사를 적극적으로 고려하세요. 무엇보다 중요한건 스스로 일어나는 힘입니다. 새로운 도전을 시작할 준비를 하세요.';
  }
}

// 추가: 권장 행동 아이디어
export function getActionSuggestions(score: number): string[] {
  /**
   * 점수에 따라 사용자에게 권장할 행동 리스트를 제공합니다.
   * @param score - 사용자의 총 점수
   * @returns 권장 행동 목록
   */
  if (score <= SCORE_THRESHOLDS.stable.max) {
    return [
      '현재 직장에서 긍정적인 에너지를 유지하며 업무에 임하세요.',
      '업무 외 시간을 활용해 자신만의 역량을 확장해보세요.',
    ];
  } else if (score <= SCORE_THRESHOLDS.slightIssue.max) {
    return [
      '상사나 동료와 원활한 소통을 통해 문제를 해결해 보세요.',
      '업무 환경 개선 방안을 신중히 검토하여 제안해 보세요.',
    ];
  } else if (score <= SCORE_THRESHOLDS.considerLeaving.max) {
    return [
      '새로운 기회를 모색해 보세요.',
      '최신 이력서를 준비하고 네트워킹 활동을 시작해 보세요.',
      '현재 보유한 스킬을 강화하여 미래를 위한 이직 준비를 해보세요.',
    ];
  } else {
    return [
      '퇴사 계획을 신중하게 구체화해 보세요.',
      '충분한 휴식을 취한 후, 새로운 도전에 용기를 내 보세요.',
      '프리랜서 활동이나 창업 등 새로운 경력 경로를 고려해 보시는 것도 좋겠습니다.',
    ];
  }
}
