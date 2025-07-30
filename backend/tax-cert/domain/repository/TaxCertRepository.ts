import { TaxCertRequest, TaxCertTwoWayRequest, CodefResponse } from '../../application/dtos/TaxCertDto';

export interface TaxCertRepository {
  requestTaxCert(request: TaxCertRequest): Promise<CodefResponse>;
  requestTaxCertTwoWay(request: TaxCertTwoWayRequest): Promise<CodefResponse>;
} 