import br.com.alura.tdd.modelo.Funcionario;
import br.com.alura.tdd.service.BonusService;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BonusServiceTest {

    @Test
    public void bonusDeveriaSerZeroPAraFuncionarioComSalaruiMuitoAlto() {
        BonusService bonusService = new BonusService();
        BigDecimal bonus = bonusService.calcularBonus(new Funcionario("Rodrigo", LocalDate.now(), new BigDecimal(25000)));
        assertEquals(new BigDecimal("0.00"), bonus);
    }

    @Test
    public void bonusDeveriaSer10PorCentoDoSalario() {
        BonusService bonusService = new BonusService();
        BigDecimal bonus = bonusService.calcularBonus(new Funcionario("Rodrigo", LocalDate.now(), new BigDecimal(2500)));
        assertEquals(new BigDecimal("250.00"), bonus);
    }

    @Test
    public void bonusDeveriaSer10PorCentoDoSalarioDeExatamemte10000() {
        BonusService bonusService = new BonusService();
        BigDecimal bonus = bonusService.calcularBonus(new Funcionario("Rodrigo", LocalDate.now(), new BigDecimal(10000)));
        assertEquals(new BigDecimal("1000.00"), bonus);
    }

}
