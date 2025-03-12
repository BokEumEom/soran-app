import { EvaluationCriteria } from '../types/onboarding';

export const evaluationCriteria: EvaluationCriteria = {
  satisfaction: [
    { min: 0, max: 3, level: '매우 낮음', description: '현재 관계에서 만족감을 느끼기 어려운 상태입니다. 작은 변화부터 시도하며 서로의 기대를 맞춰보는 것이 중요할 것 같습니다.' },
    { min: 4, max: 6, level: '보통', description: '관계에 대한 만족도가 나쁘지 않지만, 조금 더 깊이 있는 대화를 나누며 서로를 이해해보면 좋겠습니다.' },
    { min: 7, max: 10, level: '높음', description: '서로에게 만족하며 좋은 관계를 유지하고 있습니다. 지금처럼 서로를 존중하고 배려하는 마음을 이어가 보세요!' },
  ],
  communication: [
    { min: 0, max: 3, level: '불량', description: '서로의 생각이 제대로 전달되지 않아 답답함이 느껴질 수 있습니다. 오해를 줄이기 위해 차분한 대화를 시도해보는 것이 필요할 것 같습니다.' },
    { min: 4, max: 6, level: '보통', description: '소통이 어느 정도 이루어지고 있지만, 감정을 숨기지 않고 표현하는 연습을 해보는 것도 관계 개선에 도움이 될 것입니다.' },
    { min: 7, max: 10, level: '원활', description: '대화가 잘 이루어지고 있어 관계가 안정적입니다. 다양한 주제로 이야기 나누며 지금의 좋은 소통 방식을 지속해보세요!' },
  ],
  conflict_resolution: [
    { min: 0, max: 3, level: '매우 낮음', description: '갈등이 발생했을 때 해결이 쉽지 않아 관계가 어려워질 수 있습니다. 서로의 입장을 차분히 들어보는 연습부터 시작해보는 게 좋겠습니다.' },
    { min: 4, max: 6, level: '보통', description: '갈등을 해결하려는 노력이 보이지만, 조금 더 열린 마음으로 접근하면 관계가 한층 더 깊어질 것입니다.' },
    { min: 7, max: 10, level: '우수', description: '서로의 차이를 인정하고 현명하게 갈등을 해결하는 능력이 뛰어납니다. 앞으로도 이러한 긍정적인 태도를 유지해보세요!' },
  ],
  trust: [
    { min: 0, max: 3, level: '낮음', description: '상대방에 대한 신뢰가 다소 부족해 보입니다. 상대의 행동을 긍정적으로 바라보려는 노력이 필요할 것 같습니다.' },
    { min: 4, max: 6, level: '보통', description: '서로를 믿으려 하지만, 가끔 의심이 생길 때가 있을 수 있습니다. 신뢰를 쌓기 위해 솔직한 대화를 자주 나누는 것이 중요합니다.' },
    { min: 7, max: 10, level: '높음', description: '서로를 깊이 신뢰하며 안정적인 관계를 유지하고 있습니다. 이러한 믿음을 앞으로도 잘 지켜나가 보세요!' },
  ],
  emotional_support: [
    { min: 0, max: 3, level: '부족', description: '서로에게 충분한 감정적 지지를 주고받지 못하고 있어 외로움을 느낄 수 있습니다. 작은 관심 표현부터 시도해보면 좋겠습니다.' },
    { min: 4, max: 6, level: '보통', description: '감정적 지지가 이루어지고 있지만, 더 따뜻한 말 한마디가 관계를 더욱 돈독하게 만들 수 있습니다.' },
    { min: 7, max: 10, level: '강함', description: '서로에게 든든한 힘이 되어 주며 따뜻한 관계를 유지하고 있습니다. 지금처럼 서로에게 힘이 되어 주세요!' },
  ],
  future_plans: [
    { min: 0, max: 3, level: '불안정', description: '미래에 대한 확신이 부족해 불안함을 느낄 수 있습니다. 서로의 가치관을 공유하며 방향을 함께 설정해보면 도움이 될 것입니다.' },
    { min: 4, max: 6, level: '보통', description: '미래에 대한 논의가 이루어지고 있지만, 구체적인 계획을 세우면 더 큰 신뢰를 쌓을 수 있을 것입니다.' },
    { min: 7, max: 10, level: '안정', description: '관계의 미래에 대해 확신을 가지고 있으며, 함께할 계획을 구체적으로 만들어 가고 있습니다. 앞으로도 함께 성장해보세요!' },
  ],
  emotional_expression: [
    { min: 0, max: 3, level: '부족', description: '감정 표현이 부족해 오해가 생길 수 있습니다. 마음을 더 솔직하게 나누는 연습을 해보는 것이 좋겠습니다.' },
    { min: 4, max: 6, level: '보통', description: '감정을 표현하는 편이지만, 좀 더 자연스럽게 표현하면 관계가 더욱 가까워질 것입니다.' },
    { min: 7, max: 10, level: '풍부', description: '서로의 감정을 솔직하게 나누며 건강한 소통을 하고 있습니다. 이런 긍정적인 습관을 유지해보세요!' },
  ],
  personal_space: [
    { min: 0, max: 3, level: '부족', description: '서로의 개인적인 시간을 충분히 존중하지 않아 부담을 느낄 수 있습니다. 각자의 시간을 배려해보는 것이 필요할 것 같습니다.' },
    { min: 4, max: 6, level: '보통', description: '개인 공간을 어느 정도 존중하고 있지만, 조금 더 배려하면 관계가 더욱 편안해질 것입니다.' },
    { min: 7, max: 10, level: '양호', description: '서로의 개인적인 시간을 잘 존중하며 건강한 균형을 유지하고 있습니다. 지금처럼 적절한 거리를 유지해보세요!' },
  ],
  relationship_growth: [
    { min: 0, max: 3, level: '부족', description: '관계 발전을 위한 노력이 부족해 정체된 느낌이 들 수 있습니다. 함께할 새로운 경험을 만들어보는 것도 좋은 방법일 것입니다.' },
    { min: 4, max: 6, level: '보통', description: '관계를 발전시키기 위해 노력하는 모습이 보이지만, 좀 더 적극적으로 시도하면 더욱 깊이 있는 관계로 나아갈 수 있습니다.' },
    { min: 7, max: 10, level: '적극적', description: '서로의 관계를 발전시키기 위해 적극적으로 노력하고 있습니다. 앞으로도 함께 성장해나가 보세요!' },
  ],
  gratitude: [
    { min: 0, max: 3, level: '부족', description: '감사의 표현이 부족해 상대방이 소외감을 느낄 수 있습니다. 작은 고마움이라도 자주 표현해보는 것이 중요할 것 같습니다.' },
    { min: 4, max: 6, level: '보통', description: '감사하는 마음을 갖고 있지만, 조금 더 적극적으로 표현하면 관계가 더욱 따뜻해질 것입니다.' },
    { min: 7, max: 10, level: '풍부', description: '감사의 마음을 자주 표현하며 긍정적인 분위기를 만들어가고 있습니다. 앞으로도 서로를 존중하며 감사의 마음을 전해보세요!' },
  ],
};